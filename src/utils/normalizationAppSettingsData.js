export default data => ({
  headerBg: data.acf.header_bg,
  contactPhone: data.acf.contact_phone,
  contactEmail: data.acf.contact_email,
  cvs: {
    ua: data.acf.cv_ua,
    ru: data.acf.cv_ru,
    en: data.acf.cv_en
  }
});
