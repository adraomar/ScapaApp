import React, { useState } from 'react'
import { AppContext, useAppContext } from "../../context/appContext"
import EditModal from '../EditModal/EditModal';

const DataTables = () => {
    const { categories } = useAppContext(AppContext);

    const [rowData, setRowData] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (categorie) => {
        setRowData(categorie);
        setShow(true)
    };


    return (
        <>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col" className="col-1">N° Categoria</th>
                        <th scope="col" className="col-6">Descripción</th>
                        <th scope="col" className="col-3">Acción</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {categories.map((categorie) => (
                        <tr key={categorie.id}>
                            <th scope="row" className="col-1">{categorie.id}</th>
                            <td className="col-6">{categorie.description}</td>
                            <td className="col-3">
                                <button onClick={() => handleShow(categorie)} type="button" className="btn btn-warning ms-1"><i className="bi bi-pencil-square me-1"></i>Editar</button>
                                <button type="button" className="btn btn-danger ms-1"><i className="bi bi-trash3 me-1"></i>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditModal show={show} onClose={handleClose} rowData={rowData}/>
        </>
    )
}

export default DataTables