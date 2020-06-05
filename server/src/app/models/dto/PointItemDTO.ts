export default class PointItemDTO {
	public id?: number
	public itemId: number
	public pointId: number

	public constructor({ itemId, pointId }: PointItemDTO) {
		this.itemId = itemId
		this.pointId = pointId
	}
}
