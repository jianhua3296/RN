import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer TbTSNRG7SKVXGJ3YAXBcksh20SxzoJV84Qc2A_5aDJms2G4ZdagHM_xKdHCj7wVMkeeIn_VAl2MRzIjJm1UXSMRWVdVrdNTN_YzJT6mDyQP5kOZXmF_qXfiDBN2NX3Yx'
    }
});


