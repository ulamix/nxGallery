let spinnerTemplate = `
<div class="bro_box-spinner sk-fading-circle">
    <div class="bro_container"></div>
</div>`;

getBroslideStyles = (styles) => {
    let height =  v.h - v.b * (v.q ? 0 : 2);
    return `.fotorama${ v.s } .fotorama__nav--thumbs .fotorama__nav__frame {
        padding:${ v.m }px;
        height:${ v.h }px}
        .fotorama${v.s} .fotorama__thumb-border{
        height: ${this.height}px;
        border-width:${v.b}px;
        margin-top: ${v.m}px;
    }`
}

getVideoTemplate = (config) => {
    return `<div class="fotorama__video">
                <iframe src="<% print((v.type == 'youtube' ? v.p + 'youtube.com/embed/' + v.id +'?autoplay=1' : v.type == 'vimeo' ? v.p + 'player.vimeo.com/video/' + v.id + '?autoplay=1&badge=0' : v.id)  + (v.s && v.type != 'custom' ? '&' + v.s : '')) %>" frameborder="0" allowfullscreen>
                </iframe>
            </div>`;
}