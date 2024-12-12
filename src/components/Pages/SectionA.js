import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react'; // Optional: For debugging navigation issues

const SectionA = () => {
  // Optional: Use useEffect to confirm the component loads when navigating
  useEffect(() => {
    console.log('SectionA Component Loaded');
  }, []);

  // Formik logic
  const formik = useFormik({
    initialValues: {
      companyName: '',
      financialYear: '',
      contactInfo: '',
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Company Name is required'),
      financialYear: Yup.string().required('Financial Year is required'),
      contactInfo: Yup.string().required('Contact Information is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // For testing form submission
    },
  });

  return (
    <div className="section-container">
      <h1>Section A: General Disclosures</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Company Name Field */}
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <div className="error">{formik.errors.companyName}</div>
          ) : null}
        </label>

        {/* Financial Year Field */}
        <label>
          Financial Year:
          <input
            type="text"
            name="financialYear"
            value={formik.values.financialYear}
            onChange={formik.handleChange}
          />
          {formik.touched.financialYear && formik.errors.financialYear ? (
            <div className="error">{formik.errors.financialYear}</div>
          ) : null}
        </label>

        {/* Contact Information Field */}
        <label>
          Contact Information:
          <textarea
            name="contactInfo"
            value={formik.values.contactInfo}
            onChange={formik.handleChange}
          ></textarea>
          {formik.touched.contactInfo && formik.errors.contactInfo ? (
            <div className="error">{formik.errors.contactInfo}</div>
          ) : null}
        </label>

        {/* Submit Button */}
        <button type="submit">Save & Continue</button>
      </form>
    </div>
  );
};

export default SectionA;
