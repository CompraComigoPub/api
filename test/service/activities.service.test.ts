import activityService from '../../src/notifications/activities/activies.service'

test('should add new viewer in a activity with id = Xdq96nFPyqD99QDuuewY', async () => {
  const viewerId = '45b9900b-f8cf-4dd3-b720-5e2cbfef5b67'
  await activityService.addViewer(viewerId, ['2BSaufpLttOc4xd378Nk'])
  const data = await activityService.getByDocId('2BSaufpLttOc4xd378Nk')
  expect(data.viewersId.includes(viewerId)).toBeTruthy()
})
