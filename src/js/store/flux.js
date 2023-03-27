//*
//*demo: [
//*	{
//*		title: "FIRST",
//*		background: "white",
//*		initial: "white"
//*	},
//*	{
//*		title: "SECOND",
//*		background: "white",
//*		initial: "white"
//*	}
//*]

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			deleteFavorite:(id)=>{
				const store = getStore();
			
				const result =store.favorite.filter((people)=> people.uid!==id);
				
				setStore({favorite:result});
							
				return store.favorite;
				
			},

			addFavorite:(tipo, uid, image,namen)=>{
				const store = getStore()
				let algo = false;

				for (let i=0; i<store.favorite.length;i++){
					if (store.favorite[i].name == namen)
					 algo= true;
				}
				if (!algo) 
				setStore({favorite:[...store.favorite,{tipo:tipo, uid:uid, image:image,name:namen}]});
				
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
