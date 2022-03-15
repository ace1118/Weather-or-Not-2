gdjs.paanoCode = {};
gdjs.paanoCode.GDSAES_95balitaObjects1= [];
gdjs.paanoCode.GDSAES_95balitaObjects2= [];
gdjs.paanoCode.GDSAES_95balitaObjects3= [];
gdjs.paanoCode.GDplay_95pauseObjects1= [];
gdjs.paanoCode.GDplay_95pauseObjects2= [];
gdjs.paanoCode.GDplay_95pauseObjects3= [];
gdjs.paanoCode.GDforwardObjects1= [];
gdjs.paanoCode.GDforwardObjects2= [];
gdjs.paanoCode.GDforwardObjects3= [];
gdjs.paanoCode.GDbackwardObjects1= [];
gdjs.paanoCode.GDbackwardObjects2= [];
gdjs.paanoCode.GDbackwardObjects3= [];

gdjs.paanoCode.conditionTrue_0 = {val:false};
gdjs.paanoCode.condition0IsTrue_0 = {val:false};
gdjs.paanoCode.condition1IsTrue_0 = {val:false};
gdjs.paanoCode.condition2IsTrue_0 = {val:false};
gdjs.paanoCode.conditionTrue_1 = {val:false};
gdjs.paanoCode.condition0IsTrue_1 = {val:false};
gdjs.paanoCode.condition1IsTrue_1 = {val:false};
gdjs.paanoCode.condition2IsTrue_1 = {val:false};


gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.paanoCode.GDplay_95pauseObjects1});gdjs.paanoCode.eventsList0 = function(runtimeScene) {

{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
{gdjs.paanoCode.conditionTrue_1 = gdjs.paanoCode.condition0IsTrue_0;
gdjs.paanoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(58831300);
}
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.paanoCode.GDplay_95pauseObjects1});gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.paanoCode.GDplay_95pauseObjects1});gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.paanoCode.GDforwardObjects2});gdjs.paanoCode.eventsList1 = function(runtimeScene) {

{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.paanoCode.GDSAES_95balitaObjects2[i].getCurrentTime()) + 10);
}
}}

}


};gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.paanoCode.GDforwardObjects2});gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDbackwardObjects2Objects = Hashtable.newFrom({"backward": gdjs.paanoCode.GDbackwardObjects2});gdjs.paanoCode.eventsList2 = function(runtimeScene) {

{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.paanoCode.GDSAES_95balitaObjects2[i].getCurrentTime()) - 10);
}
}}

}


};gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDbackwardObjects1Objects = Hashtable.newFrom({"backward": gdjs.paanoCode.GDbackwardObjects1});gdjs.paanoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.paanoCode.GDforwardObjects2);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDforwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.paanoCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.paanoCode.GDforwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.paanoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.paanoCode.GDforwardObjects2);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDforwardObjects2Objects, runtimeScene, true, true);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.paanoCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.paanoCode.GDforwardObjects2[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.paanoCode.GDbackwardObjects2);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDbackwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDbackwardObjects2 */
{for(var i = 0, len = gdjs.paanoCode.GDbackwardObjects2.length ;i < len;++i) {
    gdjs.paanoCode.GDbackwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.paanoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.paanoCode.GDbackwardObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDbackwardObjects1Objects, runtimeScene, true, true);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDbackwardObjects1 */
{for(var i = 0, len = gdjs.paanoCode.GDbackwardObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDbackwardObjects1[i].setOpacity(50);
}
}}

}


};gdjs.paanoCode.eventsList4 = function(runtimeScene) {

{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects1[i].play();
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.paanoCode.GDSAES_95balitaObjects1.length;i<l;++i) {
    if ( gdjs.paanoCode.GDSAES_95balitaObjects1[i].isEnded() ) {
        gdjs.paanoCode.condition0IsTrue_0.val = true;
        gdjs.paanoCode.GDSAES_95balitaObjects1[k] = gdjs.paanoCode.GDSAES_95balitaObjects1[i];
        ++k;
    }
}
gdjs.paanoCode.GDSAES_95balitaObjects1.length = k;}if (gdjs.paanoCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(5);
}}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
gdjs.paanoCode.condition1IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.paanoCode.condition0IsTrue_0.val ) {
{
gdjs.paanoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.paanoCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.paanoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDplay_95pauseObjects1[i].setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.paanoCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.paanoCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("play") ) {
        gdjs.paanoCode.condition0IsTrue_0.val = true;
        gdjs.paanoCode.GDplay_95pauseObjects1[k] = gdjs.paanoCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.paanoCode.GDplay_95pauseObjects1.length = k;}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDplay_95pauseObjects1[i].setAnimationName("pause");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.paanoCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.paanoCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("pause") ) {
        gdjs.paanoCode.condition0IsTrue_0.val = true;
        gdjs.paanoCode.GDplay_95pauseObjects1[k] = gdjs.paanoCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.paanoCode.GDplay_95pauseObjects1.length = k;}if (gdjs.paanoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.paanoCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.paanoCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.paanoCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDplay_95pauseObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.paanoCode.GDplay_95pauseObjects1);

gdjs.paanoCode.condition0IsTrue_0.val = false;
{
gdjs.paanoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paanoCode.mapOfGDgdjs_46paanoCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, true);
}if (gdjs.paanoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.paanoCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.paanoCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.paanoCode.GDplay_95pauseObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.paanoCode.eventsList3(runtimeScene);
}


{


{
}

}


};

gdjs.paanoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.paanoCode.GDSAES_95balitaObjects1.length = 0;
gdjs.paanoCode.GDSAES_95balitaObjects2.length = 0;
gdjs.paanoCode.GDSAES_95balitaObjects3.length = 0;
gdjs.paanoCode.GDplay_95pauseObjects1.length = 0;
gdjs.paanoCode.GDplay_95pauseObjects2.length = 0;
gdjs.paanoCode.GDplay_95pauseObjects3.length = 0;
gdjs.paanoCode.GDforwardObjects1.length = 0;
gdjs.paanoCode.GDforwardObjects2.length = 0;
gdjs.paanoCode.GDforwardObjects3.length = 0;
gdjs.paanoCode.GDbackwardObjects1.length = 0;
gdjs.paanoCode.GDbackwardObjects2.length = 0;
gdjs.paanoCode.GDbackwardObjects3.length = 0;

gdjs.paanoCode.eventsList4(runtimeScene);
return;

}

gdjs['paanoCode'] = gdjs.paanoCode;
