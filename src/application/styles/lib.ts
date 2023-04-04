import { css } from "styled-components"

export const libSliderStyle = css`
	.noUi-target,
	.noUi-target * {
		-webkit-touch-callout: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-user-select: none;
		-ms-touch-action: none;
		touch-action: none;
		-ms-user-select: none;
		-moz-user-select: none;
		user-select: none;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.noUi-target {
		position: relative;
	}
	.noUi-base,
	.noUi-connects {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
	}
	.noUi-connects {
		overflow: hidden;
		z-index: 0;
	}
	.noUi-connect,
	.noUi-origin {
		will-change: transform;
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		-ms-transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform-style: preserve-3d;
		transform-origin: 0 0;
		transform-style: flat;
	}
	.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
		left: 0;
		right: auto;
	}
	.noUi-vertical .noUi-origin {
		top: -100%;
		width: 0;
	}
	.noUi-horizontal .noUi-origin {
		height: 0;
	}
	.noUi-handle {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		position: absolute;
	}
	.noUi-touch-area {
		height: 100%;
		width: 100%;
	}
	.noUi-state-tap .noUi-connect,
	.noUi-state-tap .noUi-origin {
		-webkit-transition: transform 0.3s;
		transition: transform 0.3s;
	}
	.noUi-state-drag * {
		cursor: inherit !important;
	}
	.noUi-horizontal {
		height: 18px;
	}
	.noUi-horizontal .noUi-handle {
		width: 34px;
		height: 28px;
		right: -17px;
		top: -6px;
	}
	.noUi-vertical {
		width: 18px;
	}
	.noUi-vertical .noUi-handle {
		width: 28px;
		height: 34px;
		right: -6px;
		bottom: -17px;
	}
	.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
		left: -17px;
		right: auto;
	}
	.noUi-target {
		background: #fafafa;
		border-radius: 4px;
		border: 1px solid #d3d3d3;
		box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
	}
	.noUi-connects {
		border-radius: 3px;
	}
	.noUi-connect {
		background: #3fb8af;
	}
	.noUi-draggable {
		cursor: ew-resize;
	}
	.noUi-vertical .noUi-draggable {
		cursor: ns-resize;
	}
	.noUi-handle {
		border: 1px solid #d9d9d9;
		border-radius: 3px;
		background: #fff;
		cursor: default;
		box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
	}
	.noUi-active {
		box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;
	}
	.noUi-handle:after,
	.noUi-handle:before {
		content: "";
		display: block;
		position: absolute;
		height: 14px;
		width: 1px;
		background: #e8e7e6;
		left: 14px;
		top: 6px;
	}
	.noUi-handle:after {
		left: 17px;
	}
	.noUi-vertical .noUi-handle:after,
	.noUi-vertical .noUi-handle:before {
		width: 14px;
		height: 1px;
		left: 6px;
		top: 14px;
	}
	.noUi-vertical .noUi-handle:after {
		top: 17px;
	}
	[disabled] .noUi-connect {
		background: #b8b8b8;
	}
	[disabled] .noUi-handle,
	[disabled].noUi-handle,
	[disabled].noUi-target {
		cursor: not-allowed;
	}
	.noUi-pips,
	.noUi-pips * {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.noUi-pips {
		position: absolute;
		color: #999;
	}
	.noUi-value {
		position: absolute;
		white-space: nowrap;
		text-align: center;
	}
	.noUi-value-sub {
		color: #ccc;
		font-size: 10px;
	}
	.noUi-marker {
		position: absolute;
		background: #ccc;
	}
	.noUi-marker-sub {
		background: #aaa;
	}
	.noUi-marker-large {
		background: #aaa;
	}
	.noUi-pips-horizontal {
		padding: 10px 0;
		height: 80px;
		top: 100%;
		left: 0;
		width: 100%;
	}
	.noUi-value-horizontal {
		-webkit-transform: translate(-50%, 50%);
		transform: translate(-50%, 50%);
	}
	.noUi-rtl .noUi-value-horizontal {
		-webkit-transform: translate(50%, 50%);
		transform: translate(50%, 50%);
	}
	.noUi-marker-horizontal.noUi-marker {
		margin-left: -1px;
		width: 2px;
		height: 5px;
	}
	.noUi-marker-horizontal.noUi-marker-sub {
		height: 10px;
	}
	.noUi-marker-horizontal.noUi-marker-large {
		height: 15px;
	}
	.noUi-pips-vertical {
		padding: 0 10px;
		height: 100%;
		top: 0;
		left: 100%;
	}
	.noUi-value-vertical {
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		padding-left: 25px;
	}
	.noUi-rtl .noUi-value-vertical {
		-webkit-transform: translate(0, 50%);
		transform: translate(0, 50%);
	}
	.noUi-marker-vertical.noUi-marker {
		width: 5px;
		height: 2px;
		margin-top: -1px;
	}
	.noUi-marker-vertical.noUi-marker-sub {
		width: 10px;
	}
	.noUi-marker-vertical.noUi-marker-large {
		width: 15px;
	}
	.noUi-tooltip {
		display: block;
		position: absolute;
		border: 1px solid #d9d9d9;
		border-radius: 3px;
		background: #fff;
		color: #000;
		padding: 5px;
		text-align: center;
		white-space: nowrap;
	}
	.noUi-horizontal .noUi-tooltip {
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		left: 50%;
		bottom: 120%;
	}
	.noUi-vertical .noUi-tooltip {
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		top: 50%;
		right: 120%;
	}
	.noUi-horizontal .noUi-origin > .noUi-tooltip {
		-webkit-transform: translate(50%, 0);
		transform: translate(50%, 0);
		left: auto;
		bottom: 10px;
	}
	.noUi-vertical .noUi-origin > .noUi-tooltip {
		-webkit-transform: translate(0, -18px);
		transform: translate(0, -18px);
		top: auto;
		right: 28px;
	}
`
