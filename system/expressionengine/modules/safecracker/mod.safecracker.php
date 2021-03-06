<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team, 
 * 		- Original Development by Barrett Newton -- http://barrettnewton.com
 * @copyright	Copyright (c) 2003 - 2013, EllisLab, Inc.
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.0
 * @filesource
 */

// ------------------------------------------------------------------------

/**
 * ExpressionEngine SafeCracker Module File 
 *
 * @package		ExpressionEngine
 * @subpackage	Modules
 * @category	Modules
 * @author		EllisLab Dev Team
 * @link		http://ellislab.com
 */

class Safecracker
{
	public $return_data = '';

	/**
	 * Safecracker
	 * 
	 * @return	void
	 */
	public function Safecracker()
	{
		$this->EE = get_instance();
		
		ee()->load->library('safecracker_lib');
		
		//proceed if called from a template
		if ( ! empty(ee()->TMPL))
		{
			$this->return_data = ee()->safecracker->entry_form();
		}
	}

	// --------------------------------------------------------------------
    
	/**
	 * submit_entry
	 * 
	 * @return	void
	 */
	public function submit_entry()
	{
		//exit if not called as an action
		if ( ! empty(ee()->TMPL) || ! ee()->input->get_post('ACT'))
		{
			return '';
		}
		
		ee()->safecracker->submit_entry();
	}

	// --------------------------------------------------------------------	
    
	/**
	 * combo_loader
	 * 
	 * @return	void
	 */
	public function combo_loader()
	{
		ee()->load->library('SC_Javascript', array('instance' => $this->EE), 'sc_javascript');
		return ee()->sc_javascript->combo_load();
	}
}

/* End of file mod.safecracker.php */
/* Location: ./system/expressionengine/modules/modules/safecracker/mod.safecracker.php */