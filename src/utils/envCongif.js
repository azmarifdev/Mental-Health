const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

export const config = {
    base_url: baseUrl.replace(/\/$/, ""),
};
