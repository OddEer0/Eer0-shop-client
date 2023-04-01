/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import { SlArrowDown } from "react-icons/sl"
import SelectLib, { DropdownIndicatorProps, GroupBase, MenuProps, components } from "react-select"

import { $Select } from "./Select.styles"
import { SelectProps } from "./Select.types"

const DropdownIndicator = (props: DropdownIndicatorProps<any, any, any>) => {
	return (
		<components.DropdownIndicator {...props}>
			<SlArrowDown />
		</components.DropdownIndicator>
	)
}

const Menu = (props: MenuProps<any, any, any>) => {
	return (
		<>
			<motion.div
				className="eer0-select__menu-container"
				animate={{
					height: "auto",
					opacity: 1,
					transition: { duration: 0.4 }
				}}
				initial={{ height: 0, opacity: 0 }}
			>
				<components.Menu {...props}>{props.children}</components.Menu>
			</motion.div>
		</>
	)
}

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
	selectColor = "primary",
	menuBgColor = "primary",
	selectSize = "medium",
	...props
}: SelectProps<Option, IsMulti, Group>) => {
	return (
		<$Select selectSize={selectSize} menuBgColor={menuBgColor} className={props.className} selectColor={selectColor}>
			<SelectLib
				{...props}
				components={{
					...props.components,
					DropdownIndicator: props.components?.DropdownIndicator
						? props.components.DropdownIndicator
						: DropdownIndicator,
					Menu: props.components?.Menu ? props.components.Menu : Menu
				}}
				className="eer0-select"
				classNamePrefix="eer0-select"
			/>
		</$Select>
	)
}
