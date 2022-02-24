const Spinner = () =>{
    return(
        <div class="d-flex justify-content-center py-2">
            <div class="spinner-border" role="status">
                <span class="visually-hidden sr-only">Loading..</span>
            </div>
            <p class="px-2">Loading...</p>
        </div>
    )
}

export default Spinner;