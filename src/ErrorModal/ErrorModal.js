import './ErrorModal.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const ErrorModal =(props) => {
  return (
    <div>
        <div className="backdrop"></div>
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className='close'>
                <Button btnClick={props.onConfirm}>Close</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModal