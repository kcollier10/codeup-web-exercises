// $(function () {
//     $('#myTab li:last-child a').tab('show')
// })

// $(function () {
//     $('#toppings')
// })
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    e.target
    e.relatedTarget
})
// $('#myTab a[href="#size"]').tab('show');
// $('#myTab a[href="#cheese-sauce"]').tab('show');
// $('#myTab a[href="#toppings"]').tab('show');