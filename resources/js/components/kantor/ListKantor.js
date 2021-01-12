import React,{useEffect,useState} from 'react';
import Select from 'react-select';
import './Kantor.css';
import Api from '../Api';

const levelOpt = [
    { value: '1', label: 'Pusat' },
    { value: '2', label: 'Wilayah' }
]

const kantorOpt = [
    { value: '1', label: 'Kantor Jakarta' },
    { value: '2', label: 'Kantor Padang' }
]

const ListKantor = () =>{
    const [kantor, setKantor] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getKantor = async () => {
        try {
            await Api.getKantor().then(res => {
                setKantor(res.data.data)
            })
        } catch (error) {
            console.error('asasd',error.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getKantor()
    }, [])

    const renderKantor = () => {
        if(isLoading){
            return(
                <tr>
                    <td colSpan='9'>Loading Data...</td>
                </tr>
            );
        }
        else{
            if(kantor[3].length === 0){
                <tr>
                    <td colSpan='10'>No Data in Database</td>
                </tr>
            }
            else {
                // foreach
                return kantor[3].map(
                    (key, index) => (
                        <tr key={index}>
                            <td></td>
                            <td>{index+1}</td>
                            <td>{key.nama_kantor}</td>
                            <td>{key.levelkantor.nama_level}</td>
                            <td>{key.provinsi.nama_singkat}</td>
                            <td>{key.nama_pimp}</td>
                            <td>{key.kontak_p}</td>
                            <td>{key.keterangan}</td>
                            <td>{key.created_r.name}</td>
                            <td>{key.updated_r.name}</td>
                        </tr>
                    )
                );
            }
        }
    }

    return (
        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        <a href="/" className="btn btn-md bg-purple"><i className="fa fa-arrow-left"></i></a>
                        Kantor PJK3 Mandiri
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active"><a href="#">Daftar Kantor</a></li>
                    </ol>
                </section>
                {/* content */}
                <section className="content">
                    {/* Default box */}
                    <div className="box box-content">
                        <div className="box-body">

                            {/* <div className="alert alert-success alert-dismissible fade in"> {{ session()->get('message') }}
                                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                            </div> */}

                            {/* sub menu */}
                            <form action="/kantor/filter" encType="multipart/form-data" name="filterData"
                                id="filterData" method="post">
                                <div className="row">
                                    <div className="col-sm-3">

                                        {/* <!-- Table Filter --> */}
                                        <table className="table table-condensed table-filter">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="input-group">
                                                            <Select options={levelOpt} className="select2" />
                                                            {/* <select className="form-control select2" name="f_level" id="f_level">
                                                                <option selected value="1">Level_Kantor</option>
                                                            </select> */}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group">
                                                            {/* <select className="form-control select2" name="f_provinsi" id="f_provinsi">
                                                                <option value="1">Provinsi</option>
                                                            </select> */}
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <button type="submit" className="btn btn-md btn-info"> <i className="fa fa-filter"></i>
                                                            Filter</button>
                                                    </td>
                                                    <td >
                                                        <a href="/kantor" className="btn btn-md btn-default"> <i
                                                                className="fa fa-refresh"></i>
                                                            Reset</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="input-group">
                                                        <Select options={kantorOpt} className="select2" />
                                                            {/* <select className="form-control select2" name="f_kantor" id="f_kantor">
                                                                <option selected value="1">Kantor</option>
                                                            </select> */}
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="input-group">
                                                            {/* <select className="form-control select2" name="f_kota" id="f_kota">
                                                                <option selected value="1">Kota</option>
                                                            </select> */}
                                                        </div>
                                                    </td>

                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <!-- End --> */}
                                    </div>

                                    <div className="col-sm-7">

                                    </div>

                                    {/* <div className="col-sm-2" style='text-align:right'> */}
                                    <div className="col-sm-2" >
                                        <div className="btn-group">
                                            <a href="/kantor/add" className="btn btn-info"> <i
                                                    className="fa fa-plus"></i>
                                                Tambah</a>

                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- /.box-footer -->
                            {{-- end of sub menu  --}} */}
                            {/* {{-- table data of car  --}} */}
                            {/* {{-- <div className="table-responsive"> --}} */}
                            <table id="data-tables" className="table table-striped table-bordered dataTable customTable">
                                <thead>
                                    <tr>
                                        <th>Aksi</th>
                                        <th>No</th>
                                        <th>Nama_Ktr</th>
                                        <th>Level_Ktr</th>
                                        <th>Provinsi</th>
                                        <th>Nama_Pimp</th>
                                        <th>Kontak_P</th>
                                        <th>Keterangan</th>
                                        <th>U_Tambah</th>
                                        <th>U_Ubah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderKantor()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    {/* <!-- /.box --> */}

                </section>
                {/* end of content */}
            </div>

        </div>
    );
}

export default ListKantor;
