import React from 'react'
import DataTables from '../DataTables/DataTables'

const MainContent = () => {
    return (
        <>
            <div className="container">
                <div className="row m-3 bg-primary d-flex">
                    <div className="col-md-9">
                        <h2 className="h2 text-light p-3">Categorias</h2>
                    </div>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-dark m-3"><i className="bi bi-plus-circle-dotted me-1"></i>Agregar categoria</button>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-md-12">
                        <DataTables />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent