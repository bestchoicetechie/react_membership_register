import './MemberList.css';
import Card from '../Card/Card';

const MemberList = (props) => {
  return (
    <Card className='users'>
        {/* <ul>
            {props.members.map((member) => (
                <li key={member.id}>
                    {member.name} {member.age} {member.phone} {member.email} {member.picture[0]}
                </li>
            ))}
        </ul> */}
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                {props.members.map((member) => (
                    <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.age}yrs old</td>
                        <td>{member.phone}</td>
                        <td>{member.email}</td>
                        <td>{member.picture[0]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

       

    </Card>
  )
}

export default MemberList