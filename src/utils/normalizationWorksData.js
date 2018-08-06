export default data => {
  return {
    categories: Object.values(data.categories),
    works: data.all_works.map(element => {
      if (element.post_status === "publish") {
        let newElement = {
          id: element.ID,
          title: element.post_title,
          category: element.category.slug,
          previewSrc: element.attachment_img_url,
          sourceCodeLink: element.acf.source_code_link,
          createdAt: element.post_date,
          modifiedAt: element.post_modified
        };

        if (element.acf.have_demo) {
          return { ...newElement, demoLink: element.acf.demo_link };
        } else {
          return newElement;
        }
      }
      return null;
    })
  };
};
