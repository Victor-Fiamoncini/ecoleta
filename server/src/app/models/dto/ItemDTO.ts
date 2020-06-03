export default class ItemDTO {
	private title: string
	private image: string

	constructor(title: string, image: string) {
		this.title = title
		this.image = image
	}

	public get _title(): string {
		return this.title
	}

	public get _image(): string {
		return this.image
	}
}
