import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import './Noteitem.css';
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div class="col-xl-3 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <div class="dropdown float-end">
                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></a>
                        <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#" onClick={()=>{updateNote(note)}}>Edit</a><a class="dropdown-item" href="#" onClick={()=>{deleteNote(note._id)}}>Remove</a></div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="avatar-md rounded-circle img-thumbnail" /></div>
                        <div class="flex-1 ms-3">
                            <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">{note.title}</a></h5>
                        </div>
                    </div>
                    <div class="mt-3 pt-1">
                        <p class="text-muted mb-0"><i class="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i> {note.description}</p>
                        <p class="text-muted mb-0 mt-2"><i class="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i> {note.tag}</p>
                        </div>
                    <div class="d-flex gap-2 pt-4">
                        <button type="button" class="btn btn-primary btn-sm w-50"><i class="bx bx-message-square-dots me-1"></i> Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
