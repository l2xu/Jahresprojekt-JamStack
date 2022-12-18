export function getCategoryPicture(catID, cats) {

    let obj = cats.find(o => o.id === catID);

    const imageUrl = obj;
    return imageUrl;
  }
  