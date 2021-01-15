import React, { useState, useEffect } from "react";
import Select from 'react-select';
import './Kantor.css';
import Api from '../Api';
import TablePJK from "../templates/TablePJK";

const ListKantor = () =>{
    const initialState = {
        kantor: [],
        levelOpt: [],
        kantorOpt: [],
        provOpt: [],
        kotaOpt: [],
        isLoading: true
    }
    const [data, setData] = useState(initialState);

    const getKantor = async () => {
        try {
            await Api.getKantor().then(res => {
                setData(prevData => ({
                    ...prevData,
                    kantor: res.data.data
                }))
                levelOption(res.data.data[0])
                kantorOption(res.data.data[3])
                provOption(res.data.data[1])
                kotaOption(res.data.data[2])
            })
        } catch (error) {
            console.error('asasd',error.message)
        }
        finally {
            setData(prevData => ({
                ...prevData,
                isLoading: false
            }))
        }
    }

    useEffect(() => {
        getKantor()
    }, [])

    const levelOption = (params) => {
        if(typeof params == 'undefined'){
            console.log('null')
        } else{
            let opt = []
            params.map((key, item) => {
                opt.push({
                    value:key.id,
                    label:key.nama_level
                })
            })
            setData(prevData =>({
                ...prevData,
                levelOpt: opt
            }))
        }
    }

    const kantorOption = (params) => {
        if(typeof params == 'undefined'){
            console.log('null')
        } else{
            let opt = []
            params.map((key, item) => {
                opt.push({
                    value:key.id,
                    label:key.nama_kantor
                })
            })
            setData(prevData => ({
                ...prevData,
                kantorOpt: opt
            }))
        }
    }

    const provOption = (params) => {
        if(typeof params == 'undefined'){
            console.log('null')
        } else{
            let opt = []
            params.map((key, item) => {
                opt.push({
                    value:key.id,
                    label:key.nama
                })
            })
            setData(prevData =>({
                ...prevData,
                provOpt: opt
            }))
        }
    }

    const kotaOption = (params) => {
        if(typeof params == 'undefined'){
            console.log('null')
        } else{
            let opt = []
            params.map((key, item) => {
                opt.push({
                    value:key.id,
                    label:key.nama
                })
            })
            setData(prevData => ({
                ...prevData,
                kotaOpt: opt
            }))
        }
    }

    const renderKantor = () => {
        // console.log(data)
        if(data.isLoading){
            return(
                <tr>
                    <td colSpan='10'>Loading Data...</td>
                </tr>
            );
        } else if (typeof data.kantor[3] !== 'undefined') {
            if(data.kantor[3].length === 0){
                <tr>
                    <td colSpan='10'>No Data in Database</td>
                </tr>
            }
            else {
                // foreach
                return data.kantor[3].map(
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
        } else {
            console.log(data)
        }
    }

    return (
        <div>
            {/* <div className="alert alert-success alert-dismissible fade in"> {{ session()->get('message') }}
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            </div> */}
            {/* sub menu */}
            <form
                action="/kantor/filter"
                encType="multipart/form-data"
                name="filterData"
                id="filterData"
                method="post"
            >
                <div className="row">
                    <div className="col-sm-3">
                        {/* <!-- Table Filter --> */}
                        <table className="table table-condensed table-filter">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="input-group">
                                            <Select options={data.levelOpt} className="select2" placeholder='Level_Kantor' />
                                            {/* <select className="form-control select2" name="f_level" id="f_level">
                                                <option selected value="1">Level_Kantor</option>
                                            </select> */}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="input-group">
                                            <Select options={data.provOpt} className="select2" placeholder='Provinsi' />
                                            {/* <select className="form-control select2" name="f_provinsi" id="f_provinsi">
                                                <option value="1">Provinsi</option>
                                            </select> */}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="btn btn-sm btn-info"
                                        >
                                            {" "}
                                            <i className="fa fa-filter"></i>
                                            Filter
                                        </button>
                                    </td>
                                    <td>
                                        <a
                                            href="kantor/reset"
                                            className="btn btn-sm btn-default"
                                        >
                                            {" "}
                                            <i className="fa fa-refresh"></i>
                                            Reset
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="input-group">
                                            <Select options={data.kantorOpt} className="select2" placeholder='Kantor' />
                                            {/* <select className="form-control select2" name="f_kantor" id="f_kantor">
                                                <option selected value="1">Kantor</option>
                                            </select> */}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="input-group">
                                            <Select options={data.kotaOpt} className="select2" placeholder='Kota' />
                                            {/* <select className="form-control select2" name="f_kota" id="f_kota">
                                                <option selected value="1">Kota</option>
                                            </select> */}
                                        </div>
                                    </td>

                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <!-- End --> */}
                    </div>

                    <div className="col-sm-7"></div>

                    {/* <div className="col-sm-2" style='text-align:right'> */}
                    <div className="col-sm-2">
                        <div className="btn-group">
                            <a
                                href="/kantor/add"
                                className="btn btn-info"
                            >
                                {" "}
                                <i className="fa fa-plus"></i>
                                Tambah
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            {/* <!-- /.box-footer -->
            {{-- end of sub menu  --}} */}
            {/* {{-- table data of car  --}} */}
            {/* {{-- <div className="table-responsive"> --}} */}
            <TablePJK data={
                [{
                    0: 'a1',
                    1: 'b1',
                    2: 'c1',
                    3: 'd1',
                    4: 'e1',
                    5: 'f1'
                },{
                    0: 'a2',
                    1: 'b2',
                    2: 'c2',
                    3: 'd2',
                    4: 'e2',
                    5: 'f2'
                },{
                    0: 'a3',
                    1: 'b3',
                    2: 'c3',
                    3: 'd3',
                    4: 'e3',
                    5: 'f3'
                },]
            } />

            <table
                id="data-tables"
                className="table table-striped table-bordered dataTable customTable"
            >
                <thead>
                    <tr>
                        <th>Aksi</th>
                        <th>No</th>
                        <th>Nama_Ktr</th>
                        <th>Level_Ktr</th>
                        <th>Prov</th>
                        <th>Nama_Pimp</th>
                        <th>Kontak_P</th>
                        <th>Keterangan</th>
                        <th>U_Tambah</th>
                        <th>U_Ubah</th>
                    </tr>
                </thead>
                <tbody>
                    { renderKantor() }
                </tbody>
            </table>
        </div>
    );
};

export default ListKantor;
