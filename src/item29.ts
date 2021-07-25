export {};

type LngLat =
    | { lng: number; lat: number }
    | { lon: number; lat: number }
    | [number, number];

interface CameraOptions {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: number;
}

type LngLatBounds =
    | { northeast: LngLat; southwest: LngLat }
    | [LngLat, LngLat]
    | [number, number, number, number];

declare function setCamera(camera: Camera): void;
declare function viewportForBonus(bounds: LngLatBounds): CameraOptions;

function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBonus(bounds);
    setCamera(camera);
    const {
        center: { lat, lng },
        zoom,
    } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

interface LngLat {
    lng: number;
    lat: number;
}

type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];

interface Camera {
    center: LngLat;
    zoom: number;
    bearing: number;
    pitch: number;
}

interface CameraOptions extends Omit<Partial<Camera>, "center"> {
    center?: LngLatLike;
}

type LngLatBounds =
    | { northeast: LngLatLike; southwest: LngLatLike }
    | [LngLatLike, LngLatLike]
    | [number, number, number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;

function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const {
        center: { lat, lng },
        zoom,
    } = camera;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
