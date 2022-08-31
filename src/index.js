/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

// Support for sidepanel attribute controls
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
// Required for Media controls
import { get } from 'lodash';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
//import Edit from './edit';
//import save from './save';

import metadata from './block.json';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	edit( attributes, setAttributes ) {
		// This returns the HTML to the back-end
		const blockProps = useBlockProps( );
		const { ColorPalette, InspectorControls } = wp.editor;

		//console.log( "edit backgroundImage: ", attributes.attributes.backgroundImage );

		const onChangeBGColor = ( hexColor ) => {
console.log( "onChangeBGColor: ", hexColor );
            setAttributes( { backgroundColor: hexColor } );
        };
 
        const onChangeTextColor = ( hexColor ) => {
console.log( "onChangeTextColor: ", hexColor );
            setAttributes( { textColor: hexColor } );
        };

		return (
			<div { ...blockProps } >

				<InspectorControls key="setting">
                    <div id="isb_controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Background color', metadata.name ) }
                            </legend>
                            <ColorPalette // Element Tag for Gutenberg standard colour selector
                                onChange={ onChangeBGColor } // onChange event callback
                            />
                        </fieldset>
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Text color', metadata.name ) }
                            </legend>
                            <ColorPalette // Element Tag for Gutenberg standard colour selector
                                onChange={ onChangeTextColor } // onChange event callback
                            />
                        </fieldset>
                    </div>
                </InspectorControls>

				<div className="bg_img"><img src={ attributes.attributes.backgroundImage } /></div>
				<div className="wrapper_before"><img src={ attributes.attributes.beforeImage } /></div>

				<div className="full wp-block-group"><div class="wp-block-group__inner-container">
					<InnerBlocks />
				</div></div>

				<div className="wrapper_after"><img src={ attributes.attributes.afterImage } /></div>
			</div>
		);
	},

	save( attributes ) {
		// This is returns the HMTL to the front-end
		const blockProps = useBlockProps.save();

		//console.log( "save backgroundImage: ", blockProps.attributes );

		return (
			<div { ...blockProps } 
				style={ {
					backgroundColor: attributes.attributes.backgroundColor,
					color: attributes.attributes.textColor,
				} }
			>

				<div className="bg_img"><img src={ attributes.attributes.backgroundImage } /></div>
				<div className="wrapper_before"><img src={ attributes.attributes.beforeImage } /></div>

				<div className="full wp-block-group"><div class="wp-block-group__inner-container">
					<InnerBlocks.Content/>
				</div></div>

				<div className="wrapper_after"><img src={ attributes.attributes.afterImage } /></div>
			</div>
		);
	},


} );
