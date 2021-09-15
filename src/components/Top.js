import Image from 'next/image';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

const Top = () => {
    
    return (
        <div >
            <div style={{display: 'flex', margin: '20px 0'}}>
                <Image 
                width="50"
                height="50"
                src="/images/logo.ico" 
                alt="logo" />
                <Header as="h1" >Header</Header>
            </div>
            <Gnb />
        </div>
    )
}

export default Top;