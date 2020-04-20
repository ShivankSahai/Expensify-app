import moment from 'moment';

export default [{
    id:'1',
    description:'gum',
    note:'',
    amount:5,
    createdAt:0
},{
    id:'2',
    description:'rent',
    note:'',
    amount:2000,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'credit',
    note:'',
    amount:5000,
    createdAt:moment(0).add(4,'days').valueOf()
}]