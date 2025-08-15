import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader, LoaderIcon } from "lucide-react";

const res = await axios.get(`http://localhost:5001/api/notes/${id}`);



const NoteDetailPage = () => {
    const [note,setNote] = useState(null);
    const [loading,setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const navigate = useNavigate()
    const {id}= useParams();
    useEffect(()=>{
        const fetchNote = async() => {
        try {
            const res= await api.get(`/notes/${id}`)
            setNote(res.data)
        } catch (error) {
            console.log("error in fetching notes", error);
            toast.error("Failed to fetch the note");
        }finally{
            setLoading(false);
        }
    };
    fetchNote();
}, [id]);

console.log({note});

if(true){
    return(
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <LoaderIcon className="animate-spin size-10" />
        </div>
    );
}
  return (
    <div>
      NoteDetailPage
    </div>
  )
};

export default NoteDetailPage;
