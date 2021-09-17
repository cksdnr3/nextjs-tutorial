const Error = ({ statusCode }) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {statusCode 
            ? `An error ${statusCode} occurred on server`
            : `An error occurred on client`}
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;