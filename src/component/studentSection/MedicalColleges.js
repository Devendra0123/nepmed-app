import React from 'react'
import "./MedicalColleges.css"

function MedicalColleges({medical_college_name}) {
    return (
        <div className="medical_colleges">
            <p> {medical_college_name} </p>
        </div>
    )
}

export default MedicalColleges
