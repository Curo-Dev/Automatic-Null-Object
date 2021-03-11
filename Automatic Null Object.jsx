var proj = app.project;
if (proj) {
    var CompItem = app.project.activeItem;
    if (CompItem != null && (CompItem instanceof CompItem)) {
        app.beginUndoGroup("");
        var selectLayers = CompItem.selectedLayers;
        if (selectLayers.length >= 1) {
            var newNull = CompItem.layers.addNull(CompItem.duration);
            for (i = 0; i <= selectLayers.length - 1; i++) {
                currentLayer = selectLayers[i];
                newNull.moveBefore(selectLayers[0]);
                currentLayer.parent = newNull;
                app.endUndoGroup();
            }
        } else {
            alert("레이어를 선택해 주세요");
        }
    } else {
        alert("컴포지션를 선택해 주세요");
    }
}