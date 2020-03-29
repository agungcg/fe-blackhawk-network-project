var fileTypeImg = ['jpg', 'jpeg', 'png'];
var fileTypeDoc = ['pdf', 'xlsx'];

function uploadModalQuartetImg(idCategory, idRetailer) {
    var titleModal1 = idCategory == 1 ? 'POG' : idCategory == 2 ? 'Fixture Traits' : idCategory == 3 ? 'Promotions' : ''
    var titleModal2 = idRetailer == 2 ? 'Alfamart (SAT)' : idRetailer == 3 ? 'Alfamidi (MIDI)' : 'Idomaret (IDM)'
    var labelExtensionModal = 'JPG, JPEG, PNG'
    Swal.fire({
        title: titleModal1 + ' ' + titleModal2,
        html:
        '<div class="upload-modal row">' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    'Vertical Line' + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbVerticalLine" name="thumbVerticalLine" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputVerticalLine" name="inputVerticalLine" class="inputVerticalLine" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadVerticalLine" name="btnUploadVerticalLine" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccessVerticalLine" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    'Wing' + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbWing" name="thumbWing" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputWing" name="inputWing" class="inputWing" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadWing" name="btnUploadWing" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccessWing" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    'Sarana BHN' + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbSaranaBHN" name="thumbSaranaBHN" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputSaranaBHN" name="inputSaranaBHN" class="inputSaranaBHN" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadSaranaBHN" name="btnUploadSaranaBHN" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccessSaranaBHN" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    'Sarana Google' + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbSaranaGoogle" name="thumbSaranaGoogle" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputSaranaGoogle" name="inputSaranaGoogle" class="inputSaranaGoogle" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadSaranaGoogle" name="btnUploadSaranaGoogle" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccessSaranaGoogle" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
        onBeforeOpen: () => {
            var pathVerticalLine = ''
            var pathWing = ''
            var pathSaranaBHN = ''
            var pathSaranaGoogle = ''

            if (idCategory == 1) {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                for (var m = 0; m < file[i].retailers[j].file.length; m++) {
                                    if (file[i].retailers[j].file[m].id == 2 ) {
                                        pathVerticalLine = domain + file[i].retailers[j].file[m].POG
                                        $('#thumbVerticalLine').attr('src', '' + pathVerticalLine + '');
                                    } else if (file[i].retailers[j].file[m].id  == 1) {
                                        pathWing = domain + file[i].retailers[j].file[m].POG
                                        $('#thumbWing').attr('src', '' + pathWing + '');
                                    } else if (file[i].retailers[j].file[m].id == 4) {
                                        pathSaranaBHN = domain + file[i].retailers[j].file[m].POG
                                        $('#thumbSaranaBHN').attr('src', '' + pathSaranaBHN + '');
                                    } else if (file[i].retailers[j].file[m].id == 5) {
                                        pathSaranaGoogle = domain + file[i].retailers[j].file[m].POG
                                        $('#thumbSaranaGoogle').attr('src', '' + pathSaranaGoogle + '');
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                for (var m = 0; m < file[i].retailers[j].file.length; m++) {
                                    if (file[i].retailers[j].file[m].id == 2 ) {
                                        pathVerticalLine = domain + file[i].retailers[j].file[m].fixture_traits
                                        $('#thumbVerticalLine').attr('src', '' + pathVerticalLine + '');
                                    } else if (file[i].retailers[j].file[m].id  == 1) {
                                        pathWing = domain + file[i].retailers[j].file[m].fixture_traits
                                        $('#thumbWing').attr('src', '' + pathWing + '');
                                    } else if (file[i].retailers[j].file[m].id == 4) {
                                        pathSaranaBHN = domain + file[i].retailers[j].file[m].fixture_traits
                                        $('#thumbSaranaBHN').attr('src', '' + pathSaranaBHN + '');
                                    } else if (file[i].retailers[j].file[m].id== 5) {
                                        pathSaranaGoogle = domain + file[i].retailers[j].file[m].fixture_traits
                                        $('#thumbSaranaGoogle').attr('src', '' + pathSaranaGoogle + '');
                                    }
                                }
                            }
                        }
                    }
                }
            }

            $("#inputVerticalLine").change(function(){
                readURLModalQuartetImg(this, 12, pathVerticalLine);
            });
            $("#inputWing").change(function(){
                readURLModalQuartetImg(this, 11, pathWing);
            });
            $("#inputSaranaBHN").change(function(){
                readURLModalQuartetImg(this, 14, pathSaranaBHN);
            });
            $("#inputSaranaGoogle").change(function(){
                readURLModalQuartetImg(this, 15, pathSaranaGoogle);
            });
            $("#btnUploadVerticalLine").click(function(){
                var formData = new FormData();
                var file = $('.inputVerticalLine')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                formData.append("fixture_type_id", 2);
                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccessVerticalLine')
                        document.getElementById('labelSuccessVerticalLine').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccessVerticalLine')
                        document.getElementById('labelSuccessVerticalLine').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
            $("#btnUploadWing").click(function(){
                var formData = new FormData();
                var file = $('.inputWing')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                formData.append("fixture_type_id", 1);
                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccessWing')
                        document.getElementById('labelSuccessWing').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccessWing')
                        document.getElementById('labelSuccessWing').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
            $("#btnUploadSaranaBHN").click(function(){
                var formData = new FormData();
                var file = $('.inputSaranaBHN')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                formData.append("fixture_type_id", 4);
                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccessSaranaBHN')
                        document.getElementById('labelSuccessSaranaBHN').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccessSaranaBHN')
                        document.getElementById('labelSuccessSaranaBHN').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
            $("#btnUploadSaranaGoogle").click(function(){
                var formData = new FormData();
                var file = $('.inputSaranaGoogle')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                formData.append("fixture_type_id", 5);
                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccessSaranaGoogle')
                        document.getElementById('labelSuccessSaranaGoogle').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccessSaranaGoogle')
                        document.getElementById('labelSuccessSaranaGoogle').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
        },
        allowOutsideClick: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Done',
    }).then((result) => {
        window.location.href = '/admin'
    });

    function readURLModalQuartetImg(input, id, path) {
        if (input.files && input.files[0]) {
            var extension = input.files[0].name.split('.').pop().toLowerCase(),
            isTypeFile = fileTypeImg.indexOf(extension) > -1;
            if (isTypeFile) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();      
                    img.src = e.target.result;
                    img.onload = function() {
                        if (id == 12){
                            $('#thumbVerticalLine').attr('src', e.target.result);   
                        } else if (id == 11) {
                            $('#thumbWing').attr('src', e.target.result);
                        } else if (id == 14) {
                            $('#thumbSaranaBHN').attr('src', e.target.result);
                        } else if (id == 15) {
                            $('#thumbSaranaGoogle').attr('src', e.target.result);
                        }   
                    }; 
                };  
                reader.readAsDataURL(input.files[0]);
            } 
            else {
                if (id == 12){
                    $('#inputVerticalLine').val('');
                    $('#thumbVerticalLine').attr('src', path);
                } else if (id == 11) {
                    $('#inputWing').val('');
                    $('#thumbWing').attr('src', path);
                } else if (id == 14) {
                    $('#inputSaranaBHN').val('');
                    $('#thumbSaranaBHN').attr('src', path);
                } else if (id == 15) {
                    $('#inputSaranaGoogle').val('');
                    $('#thumbSaranaGoogle').attr('src', path);
                }   
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Fill in with Image Extension (.jpg, .jpeg, .png) !',
                }) 
            }
        }
    }
};

function uploadModalSingleImg(idCategory, idRetailer) {
    var titleModal1 = idCategory == 1 ? 'POG' : idCategory == 2 ? 'Fixture Traits' : idCategory == 3 ? 'Promotions' : ''
    var titleModal2 = idRetailer == 2 ? 'Alfamart (SAT)' : idRetailer == 3 ? 'Alfamidi (MIDI)' : 'Idomaret (IDM)'
    var labelTitleModal = idCategory == 3 ? 'Promotion' : 'Vertical Line'
    var labelExtensionModal = 'JPG, JPEG, PNG'
    Swal.fire({
        title: titleModal1 + ' ' + titleModal2,
        html:
        '<div class="upload-modal row">' +
            '<div class="col-12">' +
                '<label class="upload-title" text-secondary">' +
                    labelTitleModal + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                    '<img id="thumbModalSingleImg" name="thumbModalSingleImg" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileNameExtensionModalSingleImg" class="upload-file-name text-secondary">' +
                        labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputModalSingleImg" name="inputModalSingleImg" class="inputModalSingleImg" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadModalSingleImg" name="btnUploadModalSingleImg" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccess" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
        onBeforeOpen: () => {
            var tempPath = ''
            var tempFixtureType = 0
            if (idCategory == 3) {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                tempPath = domain + file[i].retailers[j].promotion
                                $('#thumbModalSingleImg').attr('src', '' + tempPath + '');
                            }
                        }
                    }
                }
            } else if (idCategory == 2) {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                tempFixtureType = file[i].retailers[j].file[0].id
                                tempPath = domain + file[i].retailers[j].file[0].fixture_traits
                                $('#thumbModalSingleImg').attr('src', '' + tempPath + '');
                            }
                        }
                    }
                }
            } else if (idCategory == 1) {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                tempFixtureType = file[i].retailers[j].file[0].id
                                tempPath = domain + file[i].retailers[j].file[0].POG
                                $('#thumbModalSingleImg').attr('src', '' + tempPath + '');
                            }
                        }
                    }
                }
            }
            $("#inputModalSingleImg").change(function(){
                readURLModalSingleImg(this, tempPath);
            });
            $("#btnUploadModalSingleImg").click(function(){
                var formData = new FormData();
                var file = $('.inputModalSingleImg')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                formData.append("fixture_type_id", tempFixtureType);

                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
        },
        allowOutsideClick: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Done',
    }).then((result) => {
       window.location.href = '/admin'
    });
    
    function readURLModalSingleImg(input, path) {
        
        if (input.files && input.files[0]) {
            var extension = input.files[0].name.split('.').pop().toLowerCase(),
            isTypeFile = fileTypeImg.indexOf(extension) > -1;
            if (isTypeFile) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();      
                    img.src = e.target.result;
                    img.onload = function() {   
                        $('#thumbModalSingleImg').attr('src', e.target.result);   
                    }; 
                };  
                reader.readAsDataURL(input.files[0]);
            } else {
                $('#inputModalSingleImg').val('');
                $('#thumbModalSingleImg').attr('src', path);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Fill in with Image Extension (.jpg, .jpeg, .png) !',
                }) 
            }
        }
    }
};

function uploadModalSingleDoc(idCategory) {
    var titleModal = idCategory == 6 ? 'Visit Instructions' : idCategory == 5 ? 'Permit' :  idCategory == 4 ? 'Store List' : ''
    var labelExtensionModal = idCategory == 6 ? 'PDF' : idCategory == 5 ? 'PDF' :  idCategory == 4 ? 'EXCEL ' : ''
    Swal.fire({
        title: titleModal,
        html:
        '<div class="upload-modal row">' +
            '<div class="col-12">' +
                '<div class="upload-figure-img justify-content-center">' +
                    '<label id="fileNameModalSingleDoc" class="upload-file-name text-secondary">' +
                        ''+
                    '</label>'+
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileNameExtensionModalSingleDoc" class="upload-file-name text-secondary">' +
                        labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="upload-browse btn btn-secondary btn-sm mb-0">' +
                            '<input id="inputModalSingleDoc" name="inputModalSingleDoc" class="inputModalSingleDoc" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                        '<button id="btnUploadModalSingleDoc" name="btnUploadModalSingleDoc" type="button" class="upload-upload btn btn-primary btn-sm" onclick="">Upload</button>' +
                    '</div>' +
                    '<div class="col-12">' +
                        '<label id="labelSuccess" class="upload-file-name justify-content-center">' +
                            ''+ 
                        '</label>'+
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
        onBeforeOpen: () => {
            var tempPath = file[idCategory - 1].path
            document.getElementById('fileNameModalSingleDoc').innerHTML = file[idCategory - 1].path;
            
            $("#inputModalSingleDoc").change(function(){
                var tempFileName = readURLModalSingleDoc(this, tempPath);
                document.getElementById('fileNameModalSingleDoc').innerHTML = tempFileName;
            });

            $("#btnUploadModalSingleDoc").click(function(){
                var formData = new FormData();
                var file = $('.inputModalSingleDoc')[0].files[0];
                formData.append("files", file);
                formData.append("category_upload_id", idCategory);

                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
        },
        allowOutsideClick: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Done',
    }).then((result) => {
       window.location.href = '/admin'
    });
    
    function readURLModalSingleDoc(input, path) {
        var fileName = ''
        if (input.files && input.files[0]) {
            var extension = input.files[0].name.split('.').pop().toLowerCase(),
            isTypeFile = fileTypeDoc.indexOf(extension) > -1;
            if (isTypeFile) {
                fileName = input.files[0].name
            } 
            else {
                fileName = path
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Fill in with Document Extension (.pdf, .xlxs) !',
                }) 
            }
        }
        return fileName
    }
};

function uploadModalMultipleImg(idCategory, idRetailer) {
    var titleModal1 = idCategory == 1 ? 'POG' : idCategory == 2 ? 'Fixture Traits' : idCategory == 3 ? 'Promotions' : ''
    var titleModal2 = idRetailer == 2 ? 'Alfamart (SAT)' : idRetailer == 3 ? 'Alfamidi (MIDI)' : 'Idomaret (IDM)'
    var labelExtensionModal = 'JPG, JPEG, PNG'
    Swal.fire({
        title: titleModal1 + ' ' + titleModal2,
        html:
        '<div class="upload-modal row">' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    titleModal1 + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbPromotions1" name="thumbPromotions1" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="btn btn-secondary btn-sm">' +
                            '<input id="inputPromotions1" name="inputPromotions1" class="inputPromotions1" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-6">' +
                '<label class="upload-title text-secondary">' +
                    titleModal1 + 
                '</label>'+
                '<div class="upload-figure-img justify-content-center">' +
                   '<img id="thumbPromotions2" name="thumbPromotions2" src="" class="upload-img rounded">' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12">' +
                        '<label id="fileName" class="upload-file-name text-secondary">' +
                            labelExtensionModal + 
                        '</label>'+
                    '</div>' +
                '</div>' +
                '<div class="row" style="">' +
                    '<div class="col-12">' +
                        '<label class="btn btn-secondary btn-sm">' +
                            '<input id="inputPromotions2" name="inputPromotions2" class="inputPromotions2" type="file" style="display: none"/>' +
                            'Browse' +
                        '</label>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-12">' +
                '<button id="btnUploadPromotion" name="btnUploadPromotion" type="button" class=" btn btn-primary btn-sm" onclick="" style="">Upload</button>' +
            '</div>' +
            '<div class="col-12">' +
                '<label id="labelSuccess" class="upload-file-name justify-content-center">' +
                    ''+ 
                '</label>'+
            '</div>' +
        '</div>',
        onBeforeOpen: () => {
            var pathPromotion1 = ''
            var pathPromotion2 = ''
            if (idCategory == 3) {
                for (var i = 0; i < file.length; i++){
                    if(file[i].id == idCategory) {
                        for (var j = 0; j < file[i].retailers.length; j++) {
                            if (file[i].retailers[j].retailer_id == idRetailer) {
                                pathPromotion1 = domain + file[i].retailers[j].promotion_1
                                pathPromotion2 = domain + file[i].retailers[j].promotion_2
                                $('#thumbPromotions1').attr('src', '' + pathPromotion1 + '');
                                $('#thumbPromotions2').attr('src', '' + pathPromotion2 + '');
                            }
                        }
                    }
                }
            }
            $("#inputPromotions1").change(function(){
                readURLModalMultipleImg(this, 1, pathPromotion1);
            });
            $("#inputPromotions2").change(function(){
                readURLModalMultipleImg(this, 2, pathPromotion2);
            });
            $("#btnUploadPromotion").click(function(){
                var formData = new FormData();
                var file = $('.inputPromotions1')[0].files[0];
                var file2 = $('.inputPromotions2')[0].files[0];
                formData.append("files", file);
                formData.append("files", file2);
                formData.append("category_upload_id", idCategory);
                formData.append("retailer_id", idRetailer);
                $.ajax({
                    method: 'post',
                    url: domain + 'upload',
                    data: formData,
                    headers: token,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Success';
                        element.classList.add("text-success");
                    },
                    error: function() {
                        var element = document.getElementById('labelSuccess')
                        document.getElementById('labelSuccess').innerHTML = 'Upload Failed';
                        element.classList.add("text-danger");
                    }
                })
            });
        },
        allowOutsideClick: false,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Done',
    }).then((result) => {
        window.location.href = '/admin'
    });

    function readURLModalMultipleImg(input, id, path) {
        if (input.files && input.files[0]) {
            var extension = input.files[0].name.split('.').pop().toLowerCase(),
            isTypeFile = fileTypeImg.indexOf(extension) > -1;
            if (isTypeFile) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();      
                    img.src = e.target.result;
                    img.onload = function() {
                        if (id == 1){
                            $('#thumbPromotions1').attr('src', e.target.result);   
                        } else if (id == 2) {
                            $('#thumbPromotions2').attr('src', e.target.result);
                        } 
                    }; 
                };  
                reader.readAsDataURL(input.files[0]);
            } 
            else {
                if (id == 1){
                    $('#inputPromotions1').val('');
                    $('#thumbPromotions1').attr('src', path);
                } else if (id == 2) {
                    $('#inputPromotions2').val('');
                    $('#thumbPromotions2').attr('src', path);
                }  
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Fill in with Image Extension (.jpg, .jpeg, .png) !',
                }) 
            }
        }
    }
};