export default data => {
  let normalData = [];

  data.forEach(element => {
    if (element.status === "publish") {
      let newElement = {
        id: element.id,
        title: element.title.rendered,
        category: {
          name: element.category.cat_name,
          alias: element.category.category_nicename
        },
        previewSrc: element.attachment_img_url,
        sourceCodeLink: element.acf.source_code_link,
        createdAt: element.date,
        modifiedAt: element.modified
      };

      if (element.acf.have_demo) {
        normalData.push({ ...newElement, demoLink: element.acf.demo_link });
      } else {
        normalData.push(newElement);
      }
    }
  });

  return normalData;
};
