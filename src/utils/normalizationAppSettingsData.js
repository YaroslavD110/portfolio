export default data => ({
  headerBg: data.acf.header_bg,
  contactPhone: data.acf.contact_phone,
  contactEmail: data.acf.contact_email,
  cvs: {
    resumeUA: data.acf.cv_ua,
    resumeRU: data.acf.cv_ru,
    resumeEN: data.acf.cv_en
  }
});
