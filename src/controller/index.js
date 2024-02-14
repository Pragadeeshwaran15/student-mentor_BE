const homePage = (req, res)=>{
    res.status(200).send(`<h1>Student Mentor Management</h1>
    <h2>Mentor</h2>
    <ul>

<li> Get All Mentors = api/mentors</li>
<li> Add New Mentor = api/mentors</li>
<li> Delete Mentor = api/mentors/:id</li>
<li> Mentor Student List = api/mentors/students/:mentor_id</li>
<li> Edit Mentor = api/mentors/:id</li>
<li> Get One Mentor = api/mentors/:id</li>

    </ul>

    <h2>Student</h2>

    <ul>

    <li>Get All Student = api/student</li>
    <li>Add New Student = api/student</li>
    <li> Delete Student = api/student/:id</li>
    <li> GEt One Studnt = api/student/:id</li>
    <li> Edit Sudent = api/student/:id</li>

    </ul>

    <h2>Assign</h2>

    <ul>
    <li>POST Assign Student for a mentor = api/assign/student/:batch/mentor/:mentor_id</li>
    </ul>

    `);
}

export default {homePage}