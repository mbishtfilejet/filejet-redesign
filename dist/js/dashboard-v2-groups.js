$(document).ready(function () {
    //entity detail Registration Table
    $("#group-listing-table").DataTable({
        ajax: {
            url: "data5.json",
            dataSrc: 'groups_listing_data'
        },
        scrollX: true,
        columns: [
            {
                data: "group_name", render: function (data, type, row) {
                    return `<a href="./group-details-v1.html">${data}</a>`;
                }
            },
            { data: "primary_contact" },
            { data: "entities" },
            { data: "registrations" },
            { data: "partner_users" },
            {
                data: null, render: function (data, type, row) {
                    return `
                        <div class="d-flex align-items-center">
                            <span data-toggle="tooltip" data-bs-original-title="EDIT" class="me-1 me-md-2 d-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#edit-owner-modal">
                            <span class="icon icon-entity-edit m-0"></span>
                            </span>
                            <span data-toggle="tooltip" data-bs-original-title="DELETE" class="me-1 me-md-2 d-inline-block icon-disabled" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal">
                            <span class="icon icon-entity-delete m-0"></span>
                            </span>
                        </div>
                    `
                }
            }
        ],
        order: [[0, "asc"]],
        lengthChange: false,  // Removed pagination
        paging: false,  // Disable pagination
        info: false,    // Hide table info (e.g., "Showing 1 to 10 of 50 entries"
    });

    const groupTagwrapper = $('.group-tags-container')

    if(groupTagwrapper.length){
        initTagSelect(groupTagwrapper)
    }
})