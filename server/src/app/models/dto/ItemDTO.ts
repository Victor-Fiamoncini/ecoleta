export default class ItemDTO {
	public id: number
	public title: string
	public image: string

	public constructor({ id, title, image }: ItemDTO) {
		this.id = id
		this.title = title
		this.image = image
	}
}
