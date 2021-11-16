// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package amap.proxies;

public class LngLat
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject lngLatMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "AMap.LngLat";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Lat("Lat"),
		Lng("Lng"),
		LngLat_DriveStep_path("AMap.LngLat_DriveStep_path"),
		DrivingOptions_LngLat_Source("AMap.DrivingOptions_LngLat_Source"),
		DrivingOptions_LngLat_Destination("AMap.DrivingOptions_LngLat_Destination");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public LngLat(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "AMap.LngLat"));
	}

	protected LngLat(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject lngLatMendixObject)
	{
		if (lngLatMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("AMap.LngLat", lngLatMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a AMap.LngLat");

		this.lngLatMendixObject = lngLatMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'LngLat.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static amap.proxies.LngLat initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return amap.proxies.LngLat.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static amap.proxies.LngLat initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		if (com.mendix.core.Core.isSubClassOf("AMap.Path", mendixObject.getType()))
			return amap.proxies.Path.initialize(context, mendixObject);

		return new amap.proxies.LngLat(context, mendixObject);
	}

	public static amap.proxies.LngLat load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return amap.proxies.LngLat.initialize(context, mendixObject);
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of Lat
	 */
	public final java.math.BigDecimal getLat()
	{
		return getLat(getContext());
	}

	/**
	 * @param context
	 * @return value of Lat
	 */
	public final java.math.BigDecimal getLat(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Lat.toString());
	}

	/**
	 * Set value of Lat
	 * @param lat
	 */
	public final void setLat(java.math.BigDecimal lat)
	{
		setLat(getContext(), lat);
	}

	/**
	 * Set value of Lat
	 * @param context
	 * @param lat
	 */
	public final void setLat(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal lat)
	{
		getMendixObject().setValue(context, MemberNames.Lat.toString(), lat);
	}

	/**
	 * @return value of Lng
	 */
	public final java.math.BigDecimal getLng()
	{
		return getLng(getContext());
	}

	/**
	 * @param context
	 * @return value of Lng
	 */
	public final java.math.BigDecimal getLng(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Lng.toString());
	}

	/**
	 * Set value of Lng
	 * @param lng
	 */
	public final void setLng(java.math.BigDecimal lng)
	{
		setLng(getContext(), lng);
	}

	/**
	 * Set value of Lng
	 * @param context
	 * @param lng
	 */
	public final void setLng(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal lng)
	{
		getMendixObject().setValue(context, MemberNames.Lng.toString(), lng);
	}

	/**
	 * @return value of LngLat_DriveStep_path
	 */
	public final amap.proxies.DriveStep getLngLat_DriveStep_path() throws com.mendix.core.CoreException
	{
		return getLngLat_DriveStep_path(getContext());
	}

	/**
	 * @param context
	 * @return value of LngLat_DriveStep_path
	 */
	public final amap.proxies.DriveStep getLngLat_DriveStep_path(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		amap.proxies.DriveStep result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.LngLat_DriveStep_path.toString());
		if (identifier != null)
			result = amap.proxies.DriveStep.load(context, identifier);
		return result;
	}

	/**
	 * Set value of LngLat_DriveStep_path
	 * @param lnglat_drivestep_path
	 */
	public final void setLngLat_DriveStep_path(amap.proxies.DriveStep lnglat_drivestep_path)
	{
		setLngLat_DriveStep_path(getContext(), lnglat_drivestep_path);
	}

	/**
	 * Set value of LngLat_DriveStep_path
	 * @param context
	 * @param lnglat_drivestep_path
	 */
	public final void setLngLat_DriveStep_path(com.mendix.systemwideinterfaces.core.IContext context, amap.proxies.DriveStep lnglat_drivestep_path)
	{
		if (lnglat_drivestep_path == null)
			getMendixObject().setValue(context, MemberNames.LngLat_DriveStep_path.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.LngLat_DriveStep_path.toString(), lnglat_drivestep_path.getMendixObject().getId());
	}

	/**
	 * @return value of DrivingOptions_LngLat_Source
	 */
	public final amap.proxies.DrivingOptions getDrivingOptions_LngLat_Source() throws com.mendix.core.CoreException
	{
		return getDrivingOptions_LngLat_Source(getContext());
	}

	/**
	 * @param context
	 * @return value of DrivingOptions_LngLat_Source
	 */
	public final amap.proxies.DrivingOptions getDrivingOptions_LngLat_Source(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		amap.proxies.DrivingOptions result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.DrivingOptions_LngLat_Source.toString());
		if (identifier != null)
			result = amap.proxies.DrivingOptions.load(context, identifier);
		return result;
	}

	/**
	 * Set value of DrivingOptions_LngLat_Source
	 * @param drivingoptions_lnglat_source
	 */
	public final void setDrivingOptions_LngLat_Source(amap.proxies.DrivingOptions drivingoptions_lnglat_source)
	{
		setDrivingOptions_LngLat_Source(getContext(), drivingoptions_lnglat_source);
	}

	/**
	 * Set value of DrivingOptions_LngLat_Source
	 * @param context
	 * @param drivingoptions_lnglat_source
	 */
	public final void setDrivingOptions_LngLat_Source(com.mendix.systemwideinterfaces.core.IContext context, amap.proxies.DrivingOptions drivingoptions_lnglat_source)
	{
		if (drivingoptions_lnglat_source == null)
			getMendixObject().setValue(context, MemberNames.DrivingOptions_LngLat_Source.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.DrivingOptions_LngLat_Source.toString(), drivingoptions_lnglat_source.getMendixObject().getId());
	}

	/**
	 * @return value of DrivingOptions_LngLat_Destination
	 */
	public final amap.proxies.DrivingOptions getDrivingOptions_LngLat_Destination() throws com.mendix.core.CoreException
	{
		return getDrivingOptions_LngLat_Destination(getContext());
	}

	/**
	 * @param context
	 * @return value of DrivingOptions_LngLat_Destination
	 */
	public final amap.proxies.DrivingOptions getDrivingOptions_LngLat_Destination(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		amap.proxies.DrivingOptions result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.DrivingOptions_LngLat_Destination.toString());
		if (identifier != null)
			result = amap.proxies.DrivingOptions.load(context, identifier);
		return result;
	}

	/**
	 * Set value of DrivingOptions_LngLat_Destination
	 * @param drivingoptions_lnglat_destination
	 */
	public final void setDrivingOptions_LngLat_Destination(amap.proxies.DrivingOptions drivingoptions_lnglat_destination)
	{
		setDrivingOptions_LngLat_Destination(getContext(), drivingoptions_lnglat_destination);
	}

	/**
	 * Set value of DrivingOptions_LngLat_Destination
	 * @param context
	 * @param drivingoptions_lnglat_destination
	 */
	public final void setDrivingOptions_LngLat_Destination(com.mendix.systemwideinterfaces.core.IContext context, amap.proxies.DrivingOptions drivingoptions_lnglat_destination)
	{
		if (drivingoptions_lnglat_destination == null)
			getMendixObject().setValue(context, MemberNames.DrivingOptions_LngLat_Destination.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.DrivingOptions_LngLat_Destination.toString(), drivingoptions_lnglat_destination.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return lngLatMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final amap.proxies.LngLat that = (amap.proxies.LngLat) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "AMap.LngLat";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
