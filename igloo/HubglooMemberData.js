(function() {
     let requestId = "431024127";

     const makeDataLoader = id => (function(copyId) {
       let id = copyId;
       const reqUrl = `http://52.25.198.234/?id=${id}`

       let fetchData = {};

       let fieldMapping = {
		     "tag_compliance_officer_name":"Tag Compliance Officer Name",
		     "tag_compliance_officer_email":"Tag Compliance Officer Email",
		     "tag_membership_type_2":"Tag Membership Type",
		     "verified_by_tag_enrollment_date":"Verified By TAG Enrollment Date",
		     "membership_agreement_status":"Membership Agreement Status",
		     "small_business_exemption":"Small Business Exemption",
		     "caf_certification_countries":"CAF Certification Countries",
		     "caf_certification_business_role":"CAF Certification Covered Parties",
		     "caf_certification_regions":"CAF Certification Regions",
		     "caf_attestation_type":"CAF Certification Type",
		     "caf_enrollment_date":"CAF Enrollment Date",
		     "caf_seal_achieve_date":"CAF Seal Achieve Date",
		     "caf_seal_expiration_date":"CAF Seal Expiration Date",
		     "cap_certification_countries":"CAP Certification Countries",
		     "cap_certification_business_role":"CAP Certification Covered Parties",
		     "cap_certification_regions":"CAP Certification Regions",
		     "cap_attestation_type":"CAP Certification Type",
		     "cap_enrollment_date":"CAP Enrollment Date",
		     "cap_seal_achieve_date":"CAP Seal Achieve Date",
		     "cap_seal_expiration_date":"CAP Seal Expiration Date",
		     "cam_certification_countries":"CAM Certification Countries",
		     "cam_certification_business_role":"CAM Certification Covered Parties",
		     "cam_certification_regions":"CAM Certification Regions",
		     "attestation_type":"CAM Certification Type",
		     "cam_enrollment_date":"CAM Enrollment Date",
		     "cam_seal_achieve_date":"CAM Seal Achieve Date",
		     "cam_seal_expiration_date":"CAM Seal Expiration Date",
		     "iqg_certification_countries":"IQG Certification Countries",
		     "iqg_certification_covered_parties":"IQG Certification Covered Parties",
		     "iqg_certification_regions":"IQG Certification Regions",
		     "iqg_attestation_type":"IQG Certification Type",
		     "iqg_enrollment_date":"IQG Enrollment Date",
		     "iqg_seal_achieve_date":"IQG Seal Achieve Date",
		     "iqg_seal_expiration_date":"IQG Seal Expiration Date",
		     "compliance_officer_caf_training_date":"CAF Training Date - Compliance Officer",
		     "compliance_officer_cam_training_date":"CAM Training Date - Compliance Officer",
		     "compliance_officer_cap_training_date":"CAP Training Date - Compliance Officer",
		     "compliance_officer_iqg_training_date":"IQG Training Date - Compliance Officer",
		     "compliance_officer_vbt_training_date":"VbT Training Date - Compliance Officer",
		   };


       let displayMemberData = function(fd) {
		     var table = document.getElementById("tag_data_table");

		     var row = table.insertRow(-1); // Insert row in last position
		     var cell1 = row.insertCell(0);
		     var cell2 = row.insertCell(1);
		     cell1.innerHTML = "<strong>TAG ID</strong>";
		     cell2.innerHTML = id;

		     Object.keys(fieldMapping).forEach(function (key) {
			     var value = fd[key];
			     // if (value == null) { return; } // skip rows where there is no value

			     var row = table.insertRow(-1); // Insert row in last position
			     var cell1 = row.insertCell(0);
			     var cell2 = row.insertCell(1);
			     cell1.innerHTML = "<strong>" + fieldMapping[key] + "</strong>";
			     cell2.innerHTML = value;
		     });
	     };

       let loader = function() {
         const response = fetch(reqUrl)
           .then((response) => {
             // response validation should go here
             return response.json();
           })
           .then((data) => {
             // data validation or transforms go here
             fetchData = data;
             console.log(id + " loaded");
             displayMemberData(fetchData);
           }).catch((error) => {
             console.log(error)
           });
       };


       // fetch data
       loader();

       return {
         GetData: function() {
           /* return new Map(fetchData); */
           return  fetchData;
         }
       }
     })(id);

     const hg = makeDataLoader(requestId);
})();
