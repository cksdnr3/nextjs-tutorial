import { Icon } from 'semantic-ui-react'

const Error404 = () => {

    return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '250px 0'}}>
        <Icon  name="warning circle" size="huge" />
        <div style={{fontSize: '17px', marginTop: '10px'}}>페이지를 찾을 수 없습니다.</div>
    </div>
    </>
    )
}

export default Error404;