import React from 'react'

class CategoryPage extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className="col-lg-10">
                <h1>Hola desde Categorias</h1>
            </div>
        )
    }
}

export default CategoryPage