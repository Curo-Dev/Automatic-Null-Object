var proj = app.project;
if (proj) {
    var comp = app.project.activeItem;
    if (comp != null && (comp instanceof CompItem)) {
        app.beginUndoGroup("");
        var selectLayers = comp.selectedLayers;
        if (selectLayers.length >= 1) {
            var newNull = comp.layers.addNull(comp.duration);
            for (i = 0; i <= selectLayers.length - 1; i++) {
                currentLayer = selectLayers[i];
                newNull.moveBefore(selectLayers[0]);
                currentLayer.parent = newNull;
                app.endUndoGroup();
            }
        } else {
            comp.layers.addNull(comp.duration);
        }
    } else {
        alert("컴포지션를 선택해 주세요");
    }
}
