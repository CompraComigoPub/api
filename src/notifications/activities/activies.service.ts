import { firestore } from '../../firebase'

const getActivitiesByCompany = async (companyId: string) => {
  try {
    const result = await firestore()
      .collection('activities')
      .where('companiesId', 'array-contains', companyId)
      .orderBy('createdAt', 'desc')
      .get()

    const activitesList = []
    result.forEach((r) => activitesList.push({ ...r.data(), id: r.id }))
    return activitesList
  } catch (err) {
    console.debug(`error while trying to get activities: ${err.message}`)
    return []
  }
}

const registerActivity = async (
  companiesId: Array<string>,
  title: string,
  href: string
): Promise<void> => {
  try {
    firestore().collection('activities').doc().set({
      title,
      href,
      companiesId,
      viewersId: [],
      createdAt: new Date(),
    })
  } catch (err) {
    console.debug(`error while trying to register activity: ${err.message}`)
  }
}

const addViewer = async (viewerId: string, docsId: Array<string>) => {
  try {
    docsId.forEach((docId) => {
      firestore()
        .collection('activities')
        .doc(docId)
        .update({
          viewersId: firestore.FieldValue.arrayUnion(viewerId),
        })
    })
  } catch (err) {
    console.debug(
      `error while trying to add new viewer in a activity : ${err.message}`
    )
  }
}

const getByDocId = async (docId: string) => {
  try {
    const result = await firestore().collection('activities').doc(docId).get()
    return result.data()
  } catch (err) {
    console.debug(`error while trying to get activity: ${err.message}`)
  }
}

export default {
  getActivitiesByCompany,
  registerActivity,
  addViewer,
  getByDocId,
}
