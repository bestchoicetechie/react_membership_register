import './AddMember.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';


const AddMember = (props) => {

    const [memberName, setMemberName] = useState("");
    const [memberAge, setMemberAge] = useState("");
    const [memberEmailAddress, setMemberEmailAddress] = useState("");
    const [memberPhone, setMemberPhone] = useState("");
    const [memberPicture, setMemberPicture] = useState([]);
    const [error, setError] = useState();
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(memberName, memberAge, memberEmailAddress, memberPhone, memberPicture);
        if (memberName.trim().length === 0 ) {
            setError({
                title: "Invalid Input",
                message: "Please Enter valid data",
            })
            return;
        }
        if (memberAge.trim().length < 1){
            setError({
                title: "Invalid age Number",
                message: "Please Enter age",
            })
            return;
            
        }
        if (memberPhone.trim().length < 10){
            setError({
                title: "Invalid Phone Number",
                message: "Please valid phone number",
            })
            return;
            
        }
        if (memberEmailAddress.trim().length <  1){
            setError({
                title: "Invalid email Address",
                message: "Please valid email address",
            })
            return;
            
        }
        const memberData = {
            name: memberName,
            age: memberAge,
            phone: memberPhone,
            email: memberEmailAddress,
            picture: memberPicture,
            id:Math.random().toString(),
        }
        props.onAddMember(memberData)
        // console.log(memberName, memberAge, memberEmailAddress, memberPhone, memberPicture);
        setMemberName("");
            setMemberAge("");
            setMemberEmailAddress("");
            setMemberPhone("");
            setMemberPicture("");

    }

    //name
    const nameChangeHandler = (event) =>{
        setMemberName(event.target.value);
    };

    //age
    const ageChangeHandler = (event) => {
        setMemberAge(event.target.value);
    };
    //address
    const addressChangeHandler = (event) => {
        setMemberEmailAddress(event.target.value );
    }
    //phone
    const phoneChangeHandler = (event) => {
        setMemberPhone(event.target.value);
    }
    //picture
    const pictureChangeHandler = (event) => {
        setMemberPicture(event.target.files[0]);
    }
    const errorHandler = () =>{
        setError(null)
    }
  return (
    <div>
        { error ?  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> : ""}
    <Card className='input'>
    <form onSubmit={submitHandler}>
        <div className='inputLabel'>
        <label htmlFor="memberName">Member FullName:</label>
        <input type="text" id="memberName" placeholder='Enter Your FullName' onChange={nameChangeHandler} value={memberName} />
        </div>
        <div className='inputLabel'>
        <label htmlFor="memberAge">Age:</label>
        <input type="number" id="memberAge" placeholder="Enter your age in years" onChange={ageChangeHandler} value={memberAge} />
        </div>
        <div className='inputLabel'>
        <label htmlFor="memberAddress">Email:</label>
        <input type="email" id="memberAddress" placeholder="Enter your Email address" onChange={addressChangeHandler} value={memberEmailAddress}/>
        </div>
        <div className='inputLabel'>
        <label htmlFor="memberPhone">Phone Number:</label>
        <input type="number" id="memberPhone" placeholder="Phone Number" onChange={phoneChangeHandler} value={memberPhone} />
        </div>
        <div className='inputLabel'>
        <label htmlFor="memberPicture">Upload Image:</label>
        <input type="file"  id="memberPicture" onChange={pictureChangeHandler} value={memberPicture[0]}  />
        </div>
        <div className='button2'>
            <Button type="submit">Add Member</Button>
        </div>
    </form>
    </Card>
    </div>
  )
}

export default AddMember