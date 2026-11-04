import { userConfig } from './user-config.js';
import { defaultVendorFontSize, noPath, transformPath } from './modules/utils.js';
import UnitCircle from './shapes/unit-square/index.js';

export default class {

    static setup({ XMLSVG }) {

        return ([
            new XMLSVG.ViewGroup.Container({
                options: { id: 'renderer' }
            })
        ]);

    }

    static renderer({HTMLCanvas, XMLSVG, ENUMS}) {        

        const 
            dependencies = 
                {
                    HTMLCanvas, XMLSVG, ENUMS, userConfig, transformPath,
                }
        ;

        const [renderer] = this.setup({XMLSVG});

            noPath(ENUMS.ID.circle_top) 
            ?
            UnitCircle.init(renderer.id, {
                dependencies
                ,
                overrides: {
                    path: {
                        id: ENUMS.ID.circle_top,
                        stroke: ENUMS.COLOR.black,
                        fill: ENUMS.COLOR.orange,
                        dashed: 5, 
                        strokeWidth: 2,
                        scalingFactor: 1 * stage.grid.GRIDCELL_DIM,
                        opacity: 1,
                        transformations: {
                            SCALE_X: 1,
                            SCALE_Y: 1,
                            offsetX: stage.grid.SVG.X_IN_MIDDLE - stage.grid.GRIDCELL_DIM,
                            offsetY: stage.grid.SVG.Y_IN_MIDDLE - stage.grid.GRIDCELL_DIM,
                            angle: 0,
                            /* skew: { X: { phi: 30 } }, *//* change letter X with Y, and see the difference */
                        }
                    }
                }
            }) 
            : false;

    }

}