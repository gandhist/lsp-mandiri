import React from "react";

// const a = "test";
const ListKantor = () => {
    const people = [
        {
            Aksi: "tris",
            No: 21,
            Nama_Ktr: "gsg",
            Level_Ktr: "gsg",
            Provinsi: "gsg",
            Nama_Pimp: "gsg",
            Kontak_P: "gsg",
            Keterangan: "gsg",
            U_Tambah: "gsg",
            U_Ubah: "gsg"
        },
        {
            Aksi: "tris",
            No: 1,
            Nama_Ktr: "gsg",
            Level_Ktr: "gsg",
            Provinsi: "gsg",
            Nama_Pimp: "gsg",
            Kontak_P: "gsg",
            Keterangan: "gsg",
            U_Tambah: "gsg",
            U_Ubah: "gsg"
        },
        {
            Aksi: "tris",
            No: 1,
            Nama_Ktr: "gsg",
            Level_Ktr: "gsg",
            Provinsi: "gsg",
            Nama_Pimp: "gsg",
            Kontak_P: "gsg",
            Keterangan: "gsg",
            U_Tambah: "gsg",
            U_Ubah: "gsg"
        }
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "nick", status: "active" },
        // { name: "desi", status: "active" }
    ];
    return (
        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        <a href="#" className="btn btn-md bg-purple">
                            <i className="fa fa-arrow-left"></i>
                        </a>
                        Kantor PJK3 Mandiri
                    </h1>
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard"></i> Home
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">Daftar Kantor</a>
                        </li>
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
                                                        <div className="input-group customSelect2md">
                                                            <select
                                                                className="form-control select2"
                                                                name="f_level"
                                                                id="f_level"
                                                            >
                                                                {/* <option selected value="1">Level_Kantor</option> */}
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-group customSelect2md">
                                                            <select
                                                                className="form-control select2"
                                                                name="f_provinsi"
                                                                id="f_provinsi"
                                                            >
                                                                {/* <option value="1">Provinsi</option> */}
                                                            </select>
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
                                                        <div className="input-group customSelect2md">
                                                            <select
                                                                className="form-control select2"
                                                                name="f_kantor"
                                                                id="f_kantor"
                                                            >
                                                                {/* <option selected value="1">Kantor</option> */}
                                                            </select>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="input-group customSelect2md">
                                                            <select
                                                                className="form-control select2"
                                                                name="f_kota"
                                                                id="f_kota"
                                                            >
                                                                {/* <option selected value="1">Kota</option> */}
                                                            </select>
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
                                        <th>Provinsi</th>
                                        <th>Nama_Pimp</th>
                                        <th>Kontak_P</th>
                                        <th>Keterangan</th>
                                        <th>U_Tambah</th>
                                        <th>U_Ubah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map((person, index) => (
                                        <tr key={index}>
                                            <td>{person.Aksi}</td>
                                            <td>{person.No}</td>
                                            <td>{person.Nama_Ktr}</td>
                                            <td>{person.Level_Ktr}</td>
                                            <td>{person.Provinsi}</td>
                                            <td>{person.Nama_Pimp}</td>
                                            <td>{person.Kontak_P}</td>
                                            <td>{person.Keterangan}</td>
                                            <td>{person.U_Tambah}</td>
                                            <td>{person.U_Ubah}</td>
                                        </tr>
                                    ))}
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
};

export default ListKantor;
