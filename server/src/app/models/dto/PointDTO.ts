export default class PointDTO {
	public id?: number
	public name: string
	public email: string
	public whatsapp: string
	public image: string
	public latitude: number
	public longitude: number
	public city: string
	public uf: string

	public constructor({
		name,
		email,
		whatsapp,
		image,
		latitude,
		longitude,
		city,
		uf,
	}: PointDTO) {
		this.name = name
		this.email = email
		this.whatsapp = whatsapp
		this.image = image
		this.latitude = latitude
		this.longitude = longitude
		this.city = city
		this.uf = uf
	}
}
