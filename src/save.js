/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function saveBlock( props ) {

	const { attributes } = props;

	// Use array destructuring of the attributes
	//const { bgImage, beforeImage, afterImage, blockID } = attributes;
	//attributes({ blockID: '' });

	return (
		<div { ...useBlockProps.save() } id={ attributes.blockID }>

			<div className="bg_img"></div>

			<div className="wrapper_before"></div>

			<div className="full wp-block-group"><div class="wp-block-group__inner-container">
			<InnerBlocks.Content />
			</div></div>

			<div className="wrapper_after"></div>
		</div>
	);
}


/*
			<InnerBlocks />
{ ...blockProps }


			<div className="bg_img"><img src={ bgImage } /></div>

			<div className="wrapper_before"><img src={ beforeImage } /></div>

			<div className="full wp-block-group"><div class="wp-block-group__inner-container">
				<InnerBlocks />
			</div></div>

			<div className="wrapper_after"><img src={ afterImage } /></div>
*/