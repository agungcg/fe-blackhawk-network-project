formatDate = function(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    hour = d.getHours();
    minute = d.getMinutes();
    
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    var date = [year, month, day].join('-');
    var hourMinute = [hour, minute].join(':')

    return [date, hourMinute].join(' ')
} 

function tableVisitComplaince(data) {
    $('#dataTableVisitCompliance').DataTable({
        data:data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: 'tbl_store.tbl_dc.DC_name' },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3],
                className: 'text-center'
            },
            {   width: '25%', 
                targets: [0, 1, 2, 3]
            },
        ], 
        order: [[0, 'asc']],
    });
}

function tableFixtureCompliance(data) {
    var table = $('#dataTableFixtureCompliance').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: 'tbl_store.fixtureType1.fixture_type' },
            { data: null,
                render : function (data, type, row) {
                    if (row.entry_fixture_comp == true) {
                        return 'Yes'
                    } else {
                        if (row.entry_correct_fixture_id != null){
                            return row.entry_correct_fixture_id.fixture_type
                        } else {
                            return 'null'
                        }
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.exit_fixture_comp == true) {
                        return 'Yes'
                    } else {
                        if (row.exit_correct_fixture_id != null){
                            return row.exit_correct_fixture_id.fixture_type
                        } else {
                            return 'null'
                        }
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4, 5],
                className: 'text-center'
            },
            {   width: '16.7%', 
                targets: [0, 1, 2, 3, 4, 5]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tablePOGCompliance(data) {
    $('#dataTablePOGCompliance').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if (row.entry_pog_comp == true) {
                        return 'Yes'
                    } else {
                        return row.entry_correct_pog
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.exit_pog_comp == true) {
                        return 'Yes'
                    } else {
                        return row.exit_correct_pog
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4],
                className: 'text-center'
            },
            {   width: '20%', 
                targets: [0, 1, 2, 3, 4]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tablePODCompliance(data) {
    $('#dataTablePODCompliance').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if (row.entry_correct_fixture_id != null) {
                        return row.entry_correct_fixture_id.fixture_type
                    } else {
                        return 'null'
                    }
                
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.entry_broken_hanger == null) {
                        return 0
                    } else {
                        return row.entry_broken_hanger
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.entry_peg_comp == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.exit_broken_hanger == null) {
                        return 0
                    } else {
                        return row.exit_broken_hanger
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if (row.exit_peg_comp == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
            
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4, 5, 6, 7],
                className: 'text-center'
            },
            {   width: '14.3%', 
                targets: [0, 1, 2, 3, 4, 5, 6, 7]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tablePOPCompliance(data) {
    $('#dataTablePOPCompliance').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_pop_pic_1 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_pop_pic_2 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_pop_pic_1 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_pop_pic_2 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4],
                className: 'text-center'
            },
            {   width: '20%', 
                targets: [0, 1, 2, 3, 4]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tableInStockCompliance(data) {
    $('#dataTableInStockCompliance').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_google50k < 15) {
                        return row.entry_google50k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_google100k < 15) {
                        return row.entry_google100k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_google150k < 15) {
                        return row.entry_google150k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_google300k < 15) {
                        return row.entry_google300k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_google500k < 15) {
                        return row.entry_google500k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_spotify1M < 15) {
                        return row.entry_spotify1M
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.entry_spotify3M < 15) {
                        return row.entry_spotify3M
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_google50k < 15) {
                        return row.exit_google50k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_google100k < 15) {
                        return row.exit_google100k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_google150k < 15) {
                        return row.exit_google150k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_google300k < 15) {
                        return row.exit_google300k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_google500k < 15) {
                        return row.exit_google500k
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_spotify1M < 15) {
                        return row.exit_spotify1M
                    } else {
                        return 'Yes'
                    }
                }
            },
            { data: null,
                render : function (data, type, row) {
                    if(row.exit_spotify3M < 15) {
                        return row.exit_spotify3M
                    } else {
                        return 'Yes'
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                className: 'text-center'
            },
            {   width: '5.8%', 
                targets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            },
        ],
        order: [[0, 'asc']],
    });
}

function tableActivation(data) {
    $('#dataTableActivationKnowHow').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if(row.q1 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3],
                className: 'text-center'
            },
            {   width: '25%', 
                targets: [0, 1, 2, 3]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tablePromotionAwareness(data) {
    $('#dataTablePromotionAwareness').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if(row.q2 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3],
                className: 'text-center'
            },
            {   width: '25%', 
                targets: [0, 1, 2, 3]
            },
        ],
        order: [[0, 'asc']],
    });
}

function tableComplaintHandling(data) {
    $('#dataTableComplaintHandling').DataTable({
        data: data,
        columns: [
            { data: 'visit_date',
                render : function (data, type, row) {
                    return formatDate(data)
                }
            },
            { data: 'tbl_store.tbl_retailer.retailer_name' },
            { data: 'tbl_store.store_code' },
            { data: null,
                render : function (data, type, row) {
                    if (row.q3 == true) {
                        return 'Yes'
                    } else {
                        return 'No'
                    }
                }
            },
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3],
                className: 'text-center'
            },
            {   width: '25%', 
                targets: [0, 1, 2, 3]
            },
        ],
        order: [[0, 'asc']],
    });
}