export interface IRecipe{
	id : number,
	name : string,
	description : string,
	method : string,
	ingredients : Array<string>,
	image: string,
	preptime: number,
	cookingtime: number
}