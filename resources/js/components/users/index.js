import React from "react";
import Header from '../templates/Header';
import Navigation from '../templates/Navigation';

const Index = ({title, children}) => {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        {title}
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active"><a href="#"> Users</a></li>
                    </ol>
                </section>
                {/* content */}
                <section className="content">
                    {/* Default box */}
                    <div className="box box-content">
                        {children}
                    </div>
                    {/* <!-- /.box --> */}
                </section>
                {/* end of content */}
            </div>
            {/* <ListUser /> */}
        </div>
    );
}

export default Index;