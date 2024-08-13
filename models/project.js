import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = Schema({
    avatar: {
      type: String,
    },
    titleUk: { 
        type: String, 
        required: true 
    },
    titleEn: { 
        type: String, 
        required: true 
    },
    descriptionUk: { 
        type: String, 
        required: true 
    },
    descriptionEn: { 
        type: String, 
        required: true 
    },
    technologies: { 
        type: String, 
        required: true 
    },
    gitLink: { 
        type: String, 
        required: true 
    },
    pageLink: { 
        type: String, 
        required: true 
    },

})

const Project = model("projects", projectSchema);

export default Project;