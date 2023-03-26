import { ICategoryAxiosResponse } from "@/shared/api"

export const categoryBrandQuerySelector = (category: ICategoryAxiosResponse) => category.brands

export const categoryFiltersQuerySelector = (category: ICategoryAxiosResponse) => category.filters
